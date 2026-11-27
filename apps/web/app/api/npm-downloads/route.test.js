import { describe, expect, test } from "bun:test";
import { officialPackageNames } from "../../../lib/downloads.ts";

describe("npm downloads", () => {
  test("keeps only @betteroffice packages", () => {
    expect(
      officialPackageNames({
        "@betteroffice/docx": "write",
        "@neonflower/sheet-core": "write",
        "other-package": "read",
      }),
    ).toEqual(["@betteroffice/docx", "@neonflower/sheet-core"]);
  });
});
