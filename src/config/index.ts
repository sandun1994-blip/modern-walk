export const Config = {
  uiMasterData: {
    siteBrand: "Modern Walk",
    section: {
      flash_sale: "Flsh Sale",
      categories: "Categories",
    },
  },
  colors: {
    green: "#2BD9AF",
    red: "#FF5E84",
    blue: "#5ec4ff",
    yellow: "#ffb627",
  },
};

export const categories: { cat: string; color: string }[] = [
  { cat: "electronics", color: Config.colors.yellow },
  { cat: "jewelery", color: Config.colors.blue },
  { cat: "men's clothing", color: Config.colors.green },
  { cat: "women's clothing", color: Config.colors.red },
];
