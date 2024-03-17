import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { colorandom } from "./main.ts";

Deno.test(
  "colorandom() returns a random color code by default",
  () => {
    const actual = colorandom();
    assertEquals(typeof actual, "string");
    assertEquals(actual.length, 7);
  },
);

Deno.test(
  "colorandom('hex') returns a random color code by hexadecimal string",
  () => {
    const actual = colorandom("hex");
    assertEquals(typeof actual, "string");
    assertEquals(actual.length, 7);
    assertEquals(actual.startsWith("#"), true);
  },
);

Deno.test(
  "colorandom('rgb') returns a random color code by RGB string",
  () => {
    const actual = colorandom("rgb");
    assertEquals(typeof actual, "string");
    assertEquals(actual.startsWith("rgb("), true);
    assertEquals(actual.endsWith(")"), true);
  },
);

Deno.test(
  "colorandom('hsl') returns a random color code by HSL string",
  () => {
    const actual = colorandom("hsl");
    assertEquals(typeof actual, "string");
    assertEquals(actual.startsWith("hsl("), true);
    assertEquals(actual.endsWith(")"), true);
  },
);
