import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { colorandom } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(colorandom().length, 7);
});
