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
    symbol: "La-Lu",
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
    symbol: "Po",
    group: "Metalloid",
  },
  {
    symbol: "At",
    group: "Halogen",
  },
  {
    symbol: "Rn",
    group: "Noblegas",
  },
  {
    symbol: "Fr",
    group: "Alkalimetal",
  },
  {
    symbol: "Ra",
    group: "Alkalineearthmetal",
  },
  {
    symbol: "Ac-Lr",
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
    group: "Transitionmetal",
  },
  {
    symbol: "Ds",
    group: "Transitionmetal",
  },
  {
    symbol: "Rg",
    group: "Transitionmetal",
  },
  {
    symbol: "Cn",
    group: "Transitionmetal",
  },
  {
    symbol: "Nh",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Fl",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Mc",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Lv",
    group: "Post-transitionmetal",
  },
  {
    symbol: "Ts",
    group: "Halogen",
  },
  {
    symbol: "Og",
    group: "Noblegas",
  },

];

exports.periodicTable = periodicTable;
