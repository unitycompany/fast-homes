import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const DropdownContainer = styled.div`
  position: relative;
  width: auto;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  width: auto;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ colorText }) => colorText || '#fff' };
  transition: all .2s ease;
  text-transform: uppercase;
  font-family: var(--font--montserrat);

  &:hover {
    border-bottom: 1px solid #fff;
  }

  @media (max-width: 768px) {
    margin-top: -7px;
    gap: 10px;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 200px;
  background-color: var(--color--black);
  border-top: 2px solid #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: transform 0.3s ease, max-height 0.3s ease;
  font-family: var(--font--montserrat);
`;

const DropdownItem = styled.div`
  padding: 14px;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #fff;
    color: var(--color--black);
  }
`;

const Submenu = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #222;
`;

const SubmenuItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 11px;
  color: #ddd;
  transition: background-color 0.2s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #fff;
    color: var(--color--black);
  }
`;

const DropdownArrow = styled.span`
  font-size: 16px;
  color: ${({ colorIcon }) => colorIcon || '#fff' };
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const HeaderSelect = ({ colorIcon, colorText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const navigate = useNavigate();

  const options = [
    { label: "Pavimentos", submenu: [
        { label: "1 pavimento", path: "/sub1" },
        { label: "2 pavimentos", path: "/sub2" },
        { label: "3 pavimentos", path: "/sub3" },
      ] },
    { label: "Quartos", submenu: [
        { label: "1 quarto", path: "/sub4" },
        { label: "2 quartos", path: "/sub5" },
        { label: "3 quartos", path: "/sub6" },
      ] },
    { label: "Área Construída", submenu: [
        { label: "100m² até 200m²", path: "/sub7" },
        { label: "200m² até 300m²", path: "/sub8" },
        { label: "300m² até 400m²", path: "/sub9" },
      ] },
    { label: "Banheiros", submenu: [
        { label: "1 banheiro", path: "/sub7" },
        { label: "2 banheiros", path: "/sub8" },
        { label: "3 banheiros", path: "/sub9" },
        { label: "4 banheiros", path: "/sub9" },
      ] },
  ];

  const handleSelect = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const handleSubSelect = (path) => {
    setIsOpen(false);
    setOpenSubmenuIndex(null);
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setOpenSubmenuIndex(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)} colorText={colorText}>
        Catálogo de Casas
        <DropdownArrow isOpen={isOpen} colorIcon={colorIcon}>
          <IoIosArrowDown />
        </DropdownArrow>
      </DropdownHeader>
      <DropdownList isOpen={isOpen}>
        {options.map((option, index) => (
          <div key={index}>
            <DropdownItem onClick={() => handleSelect(index)}>
              {option.label}
              {option.submenu && (
                <DropdownArrow isOpen={openSubmenuIndex === index}>
                  <IoIosArrowDown />
                </DropdownArrow>
              )}
            </DropdownItem>
            {option.submenu && (
              <Submenu isOpen={openSubmenuIndex === index}>
                {option.submenu.map((sub, subIndex) => (
                  <SubmenuItem key={subIndex} onClick={() => handleSubSelect(sub.path)}>
                    {sub.label}
                  </SubmenuItem>
                ))}
              </Submenu>
            )}
          </div>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default HeaderSelect;
