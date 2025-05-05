import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";


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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

// Área dos selects (lado esquerdo)
const FiltroLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  flex: 1;
  @media (max-width: 768px){
    flex-direction: column;
  }
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

// Botão centralizado para mobile
const MobileToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    width: max-content;
    padding: 5px 5px 5px 10px;
    gap: 10px;
    border: 1px solid #00000021;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    border-radius: 5px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .2s ease-in-out;

    &:hover svg {
      transform: rotate(90deg);
    }

    & svg {
      font-size: 22px;
      transition: all .2s ease-in-out;
    }
  }
`;

// Container com animação para exibir/recolher o filtro no mobile
const MobileFiltroContainer = styled.div`
  overflow: hidden;
  width: 100%;
  transition: max-height 0.5s ease;
  max-height: ${({ open }) => (open ? "1000px" : "0")};

  @media (min-width: 769px) {
    max-height: none;
  }
`;

const baseOptions = {
  "Área construída": ["0-50", "51-100", "101-200", "201-400"],
  "N° de pavimentos": ["1 pavimento", "2 pavimentos"],
  "N° de quartos": ["1", "2", "3", "4"],
  "N° de banheiros": ["1", "2", "3", "4"]
};

const filterCategories = Object.keys(baseOptions);

const Filtro = ({
  cards = [],
  onSearch = () => {},
  hasSearched = false,
  onClearFilters = () => {},
  onFilterChange = () => {},
  modalConfig = {} // propriedade mantida, mas não utilizada
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Detecta se é mobile (tela <= 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      location.pathname.includes("/catalogo-de-casas") &&
      location.state &&
      location.state.selectedOptions
    ) {
      setSelectedOptions(location.state.selectedOptions);
    }
  }, [location]);

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

  // Verifica se a opção está disponível com base nos cards
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
    if (!isOptionAvailable(category, value)) {
      alert(
        `Não temos essa quantidade de ${category.toLowerCase()} para casas com ${getSummarySelectedFilters(
          category
        )}.`
      );
      return;
    }
    if (hasSearched && onFilterChange) {
      onFilterChange();
    }
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const removeFilter = (category) => {
    setSelectedOptions((prev) => {
      const newFilters = { ...prev };
      delete newFilters[category];
      if (Object.keys(newFilters).length === 0 && onFilterChange) {
        onFilterChange();
      }
      return newFilters;
    });
  };

  const handleSearch = () => {
    if (!location.pathname.includes("/catalogo-de-casas")) {
      navigate("/catalogo-de-casas", { state: { selectedOptions } });
    } else {
      console.log("🔍 Aplicando filtro com opções:", selectedOptions);
      onSearch(selectedOptions);
    }
    // Após buscar, se for mobile, recolhe o filtro
    if (isMobile) setIsMobileFilterOpen(false);
  };

  const handleClear = () => {
    console.log("🗑️ Limpando filtros");
    setSelectedOptions({});
    onSearch(null);
    onClearFilters();
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen((prev) => !prev);
  };

  // Conteúdo do filtro (mesmo para mobile e desktop)
  const filtroContent = (
    <>
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
                </FilterBadge>
              )
          )}
        </SelectedFiltersContainer>
      )}
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          <MobileToggleButton variant="contained" onClick={toggleMobileFilter}>
            {isMobileFilterOpen ? "Fechar" : "Filtrar"}<MdOutlineArrowRight />
          </MobileToggleButton>
          <MobileFiltroContainer open={isMobileFilterOpen}>
            <FiltroContainer>{filtroContent}</FiltroContainer>
          </MobileFiltroContainer>
        </>
      ) : (
        <FiltroContainer>{filtroContent}</FiltroContainer>
      )}
    </>
  );
};

export default Filtro;
