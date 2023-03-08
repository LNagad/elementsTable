const express = require("express");

const periodicTable = [
  {
    symbol: "H",
    group: "Nonmetal",
  },
  {
    symbol: "He",
    group: "Noblegas",
  },
  {
    symbol: "Li",
    group: "Alkalimetal",
  },
  {
    symbol: "Be",
    group: "Alkalineearthmetal",
  },
  {
    symbol: "B",
    group: "Metalloid",
  },
  {
    symbol: "C",
    group: "Nonmetal",
  },
  {
    symbol: "N",
    group: "Nonmetal",
  },
  {
    symbol: "O",
    group: "Nonmetal",
  },
  {
    symbol: "F",
    group: "Halogen",
  },
  {
    symbol: "Ne",
    group: "Noblegas",
  },
  {
    symbol: "Na",
    group: "Alkalimetal",
  },
  {
    symbol: "Mg",
    group: "Alkalineearthmetal",
  },
  {
    symbol: "Al",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Si",
    group: "Metalloid",
  },
  {
    symbol: "P",
    group: "Nonmetal",
  },
  {
    symbol: "S",
    group: "Nonmetal",
  },
  {
    symbol: "Cl",
    group: "Halogen",
  },
  {
    symbol: "Ar",
    group: "Noblegas",
  },
  {
    symbol: "K",
    group: "Alkalimetal",
  },
  {
    symbol: "Ca",
    group: "Alkalineearthmetal",
  },
  {
    symbol: "Sc",
    group: "Transitionmetal",
  },
  {
    symbol: "Ti",
    group: "Transitionmetal",
  },
  {
    symbol: "V",
    group: "Transitionmetal",
  },
  {
    symbol: "Cr",
    group: "Transitionmetal",
  },
  {
    symbol: "Mn",
    group: "Transitionmetal",
  },
  {
    symbol: "Fe",
    group: "Transitionmetal",
  },
  {
    symbol: "Co",
    group: "Transitionmetal",
  },
  {
    symbol: "Ni",
    group: "Transitionmetal",
  },
  {
    symbol: "Cu",
    group: "Transitionmetal",
  },
  {
    symbol: "Zn",
    group: "Transitionmetal",
  },
  {
    symbol: "Ga",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Ge",
    group: "Metalloid",
  },
  {
    symbol: "As",
    group: "Metalloid",
  },
  {
    symbol: "Se",
    group: "Nonmetal",
  },
  {
    symbol: "Br",
    group: "Halogen",
  },
  {
    symbol: "Kr",
    group: "Noblegas",
  },
  {
    symbol: "Rb",
    group: "Alkalimetal",
  },
  {
    symbol: "Sr",
    group: "Alkalineearthmetal",
  },
  {
    symbol: "Y",
    group: "Transitionmetal",
  },
  {
    symbol: "Zr",
    group: "Transitionmetal",
  },
  {
    symbol: "Nb",
    group: "Transitionmetal",
  },
  {
    symbol: "Mo",
    group: "Transitionmetal",
  },
  {
    symbol: "Tc",
    group: "Transitionmetal",
  },
  {
    symbol: "Ru",
    group: "Transitionmetal",
  },
  {
    symbol: "Rh",
    group: "Transitionmetal",
  },
  {
    symbol: "Pd",
    group: "Transitionmetal",
  },
  {
    symbol: "Ag",
    group: "Transitionmetal",
  },
  {
    symbol: "Cd",
    group: "Transitionmetal",
  },
  {
    symbol: "In",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Sn",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Sb",
    group: "Metalloid",
  },
  {
    symbol: "Te",
    group: "Metalloid",
  },
  {
    symbol: "I",
    group: "Halogen",
  },
  {
    symbol: "Xe",
    group: "Noblegas",
  },
  {
    symbol: "Cs",
    group: "Alkalimetal",
  },
  {
    symbol: "Ba",
    group: "Alkalineearthmetal",
  },
  {
    symbol: "La",
    group: "Lanthanide",
  },
  {
    symbol: "Ce",
    group: "Lanthanide",
  },
  {
    symbol: "Pr",
    group: "Lanthanide",
  },
  {
    symbol: "Nd",
    group: "Lanthanide",
  },
  {
    symbol: "Pm",
    group: "Lanthanide",
  },
  {
    symbol: "Sm",
    group: "Lanthanide",
  },
  {
    symbol: "Eu",
    group: "Lanthanide",
  },
  {
    symbol: "Gd",
    group: "Lanthanide",
  },
  {
    symbol: "Tb",
    group: "Lanthanide",
  },
  {
    symbol: "Dy",
    group: "Lanthanide",
  },
  {
    symbol: "Ho",
    group: "Lanthanide",
  },
  {
    symbol: "Er",
    group: "Lanthanide",
  },
  {
    symbol: "Tm",
    group: "Lanthanide",
  },
  {
    symbol: "Yb",
    group: "Lanthanide",
  },
  {
    symbol: "Lu",
    group: "Lanthanide",
  },
  {
    symbol: "Hf",
    group: "Transitionmetal",
  },
  {
    symbol: "Ta",
    group: "Transitionmetal",
  },
  {
    symbol: "W",
    group: "Transitionmetal",
  },
  {
    symbol: "Re",
    group: "Transitionmetal",
  },
  {
    symbol: "Os",
    group: "Transitionmetal",
  },
  {
    symbol: "Ir",
    group: "Transitionmetal",
  },
  {
    symbol: "Pt",
    group: "Transitionmetal",
  },
  {
    symbol: "Au",
    group: "Transitionmetal",
  },
  {
    symbol: "Hg",
    group: "Transitionmetal",
  },
  {
    symbol: "Tl",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Pb",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Bi",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Th",
    group: "Actinide",
  },
  {
    symbol: "Pa",
    group: "Actinide",
  },
  {
    symbol: "U",
    group: "Actinide",
  },
  {
    symbol: "Np",
    group: "Actinide",
  },
  {
    symbol: "Pu",
    group: "Actinide",
  },
  {
    symbol: "Am",
    group: "Actinide",
  },
  {
    symbol: "Cm",
    group: "Actinide",
  },
  {
    symbol: "Bk",
    group: "Actinide",
  },
  {
    symbol: "Cf",
    group: "Actinide",
  },
  {
    symbol: "Es",
    group: "Actinide",
  },
  {
    symbol: "Fm",
    group: "Actinide",
  },
  {
    symbol: "Md",
    group: "Actinide",
  },
  {
    symbol: "No",
    group: "Actinide",
  },
  {
    symbol: "Lr",
    group: "Actinide",
  },
  {
    symbol: "Rf",
    group: "Transitionmetal",
  },
  {
    symbol: "Db",
    group: "Transitionmetal",
  },
  {
    symbol: "Sg",
    group: "Transitionmetal",
  },
  {
    symbol: "Bh",
    group: "Transitionmetal",
  },
  {
    symbol: "Hs",
    group: "Transitionmetal",
  },
  {
    symbol: "Mt",
    group: "Unknown",
  },
  {
    symbol: "Ds",
    group: "Unknown",
  },
  {
    symbol: "Rg",
    group: "Unknown",
  },
  {
    symbol: "Cn",
    group: "Transitionmetal",
  },
  {
    symbol: "Nh",
    group: "Unknown",
  },
  {
    symbol: "Fl",
    group: "Unknown",
  },
  { symbol: "Mc", group: "Unknown" },
  { symbol: "Lv", group: "Unknown" },
  { symbol: "Ts", group: "Unknown" },
  { symbol: "Og", group: "Unknown" },
];

exports.periodicTable = periodicTable;
