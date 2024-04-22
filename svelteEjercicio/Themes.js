export const themes = {
  avengers: {
    bg: "#ffe9c5",
    color: "#e54b00",
    color2: "#512613",
  },
  terminator: {
    bg: "#030303",
    color: "#32d2dd",
    color2: "#d0d0d0",
  },
};

export function setStyle(themeName = "terminator") {
  const theme = themes[themeName.toLowerCase()];

  for (const property in theme) {
    const propertyName = "--" + property;
    document.body.style.setProperty(propertyName, theme[property]);
  }
}
