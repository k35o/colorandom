type Format = "hex" | "rgb" | "hsl";

/**
 * This function gets color code by Math.random.
 *
 * @param {Format} type - The format of the color code.
 * @returns {string} The color code.
 */
export function colorandom(
  type: Format = "hex",
): string {
  if (type === "rgb") {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  }
  if (type === "hsl") {
    return `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${
      Math.random() * 100
    }%)`;
  }
  return "#" + Math.random().toString(16).slice(2, 8);
}
