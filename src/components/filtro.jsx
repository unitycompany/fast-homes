import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// Modal customizável – os estilos podem ser sobrescritos via prop modalConfig
const ModalWrapper = styled.div`
  position: fixed;
  top: ${(props) => props.top || "10%"};
  left: ${(props) => props.left || "50%"};
  transform: translateX(-50%);
  background: ${(props) => props.background || "#fff"};
  width: ${(props) => props.width || "50%"};
  padding: ${(props) => props.padding || "20px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  box-shadow: ${(props) => props.boxShadow || "0 0 10px rgba(0,0,0,0.3)"};
  z-index: ${(props) => props.zIndex || "10000"};
  text-align: ${(props) => props.textAlign || "center"};
`;

// Container principal para o filtro
const FiltroContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    padding: 5% 2.5%;
  }
  .filterControl {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .option {
    height: 55px;
    @media (max-width: 768px) {
      width: 100% !important;
    }
  }
`;

// Container flex para selects e botão
const FiltroTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: nowrap;
`;

// Área dos selects (lado esquerdo)
const FiltroLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  flex: 1;
`;

// Área do botão (lado direito)
const FiltroRight = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  & button {
    width: 100%;
    padding: 15px;
    font-size: 14px;
    font-weight: 600;
    background: ${({ hasSearched }) => (hasSearched ? "#720404" : "#000")};
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;
    text-transform: uppercase;
    &:hover {
      transform: scale(0.98);
      background-color: #252525;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

// Container para os badges dos filtros selecionados
const SelectedFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

// Cada badge de filtro selecionado
const FilterBadge = styled.div`
  background: #cfcfcf3e;
  padding: 5px 5px 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  & b {
    font-weight: 600;
  }
`;

// Ícone "X" para remover o filtro individualmente
const RemoveIcon = styled.span`
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
  background-color: #ff000097;
  color: #fff;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
`;

// Opções base (sempre exibidas) para cada categoria
const baseOptions = {
  "N° de pavimentos": ["1 pavimento", "2 pavimentos"],
  "Área construída": ["0-50", "51-100", "101-200", "201-400"],
  "N° de quartos": ["1", "2", "3", "4"],
  "N° de banheiros": ["1", "2", "3", "4"]
};

const filterCategories = Object.keys(baseOptions);

// Se a prop "cards" não for fornecida (ou estiver vazia), tratamos como array vazio para liberar as opções.
const Filtro = ({
  cards = [],
  onSearch = () => {},
  hasSearched = false,
  onClearFilters = () => {},
  onFilterChange = () => {},
  modalConfig = {}
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [modalMessage, setModalMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Se houver filtros no state da navegação (por exemplo, vindo da página intermediária)
  // pré-carrega os filtros no componente.
  useEffect(() => {
    if (
      location.pathname.includes("/catalogo-de-casas") &&
      location.state &&
      location.state.selectedOptions
    ) {
      setSelectedOptions(location.state.selectedOptions);
    }
  }, [location]);

  // Esconde o modal automaticamente após 2 segundos
  useEffect(() => {
    if (modalMessage) {
      const timer = setTimeout(() => {
        setModalMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [modalMessage]);

  // Gera um resumo dos filtros já escolhidos (exceto o atual)
  const getSummarySelectedFilters = (excludeCategory) => {
    const filters = Object.entries(selectedOptions)
      .filter(([cat, value]) => cat !== excludeCategory && value)
      .map(
        ([cat, value]) =>
          `${value} ${cat.replace("N° de ", "").toLowerCase()}`
      );
    return filters.join(", ") || "todos";
  };

  // Se não houver cards (ou estiver vazio), todas as opções são consideradas disponíveis.
  const isOptionAvailable = (category, option) => {
    if (!cards || cards.length === 0) return true;
    const filtered = cards.filter((card) => {
      let matches = true;
      Object.entries(selectedOptions).forEach(([cat, value]) => {
        if (cat === category || !value) return;
        if (cat === "N° de pavimentos") {
          matches = matches && card.pavimentos === value;
        } else if (cat === "N° de quartos") {
          matches = matches && card.quartos === parseInt(value, 10);
        } else if (cat === "N° de banheiros") {
          matches = matches && card.banheiros === parseInt(value, 10);
        } else if (cat === "Área construída") {
          const [min, max] = value.split("-").map(Number);
          matches = matches && card.area >= min && card.area <= max;
        }
      });
      return matches;
    });

    if (category === "N° de pavimentos") {
      return filtered.some((card) => card.pavimentos === option);
    } else if (category === "N° de quartos") {
      return filtered.some((card) => card.quartos === parseInt(option, 10));
    } else if (category === "N° de banheiros") {
      return filtered.some((card) => card.banheiros === parseInt(option, 10));
    } else if (category === "Área construída") {
      const [min, max] = option.split("-").map(Number);
      return filtered.some((card) => card.area >= min && card.area <= max);
    }
    return false;
  };

  const handleSelect = (category, value) => {
    // Se a opção não estiver disponível, exibe o modal de aviso
    if (!isOptionAvailable(category, value)) {
      setModalMessage(
        `Não temos essa quantidade de ${category.toLowerCase()} para casas com ${getSummarySelectedFilters(
          category
        )}.`
      );
      return;
    }
    // Se o botão estava "Limpar" e o usuário adiciona nova informação, chama onFilterChange para voltar a "Buscar"
    if (hasSearched && onFilterChange) {
      onFilterChange();
    }
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const removeFilter = (category) => {
    setSelectedOptions((prev) => {
      const newFilters = { ...prev };
      delete newFilters[category];
      // Se não houver mais filtros, chama onFilterChange para voltar a "Buscar"
      if (Object.keys(newFilters).length === 0 && onFilterChange) {
        onFilterChange();
      }
      return newFilters;
    });
  };

  const handleSearch = () => {
    // Como este componente é um intermediador, ao clicar em "Buscar"
    // redirecionamos para "/catalogo-de-casas" com os filtros selecionados.
    if (!location.pathname.includes("/catalogo-de-casas")) {
      navigate("/catalogo-de-casas", { state: { selectedOptions } });
      return;
    }
    console.log("🔍 Aplicando filtro com opções:", selectedOptions);
    onSearch(selectedOptions);
  };

  const handleClear = () => {
    console.log("🗑️ Limpando filtros");
    setSelectedOptions({});
    onSearch(null);
    onClearFilters();
  };

  return (
    <FiltroContainer>
      <FiltroTop>
        <FiltroLeft>
          {filterCategories.map((category) => (
            <FormControl
              key={category}
              className="filterControl"
              variant="outlined"
              sx={{ minWidth: 200 }}
            >
              <InputLabel id={`${category}-label`}>{category}</InputLabel>
              <Select
                className="option"
                labelId={`${category}-label`}
                id={`${category}-select`}
                value={selectedOptions[category] || ""}
                label={category}
                onChange={() => {}}
              >
                {baseOptions[category].map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                    onClick={() => handleSelect(category, option)}
                    style={{
                      color: isOptionAvailable(category, option)
                        ? "inherit"
                        : "#00000030"
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </FiltroLeft>
        <FiltroRight hasSearched={hasSearched}>
          {hasSearched ? (
            <Button variant="contained" color="error" onClick={handleClear}>
              Limpar
            </Button>
          ) : (
            <Button variant="contained" onClick={handleSearch}>
              Buscar
            </Button>
          )}
        </FiltroRight>
      </FiltroTop>
      {Object.keys(selectedOptions).length > 0 && (
        <SelectedFiltersContainer>
          {Object.entries(selectedOptions).map(
            ([key, value]) =>
              value && (
                <FilterBadge key={key}>
                  <b>{key}</b>: {value}
                  <RemoveIcon onClick={() => removeFilter(key)}>✕</RemoveIcon>
                </FilterBadge>
              )
          )}
        </SelectedFiltersContainer>
      )}
      {modalMessage && (
        <ModalWrapper {...modalConfig}>
          <p>{modalMessage}</p>
        </ModalWrapper>
      )}
    </FiltroContainer>
  );
};

export default Filtro;
