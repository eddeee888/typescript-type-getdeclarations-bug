import type { BookTable, Selectable } from "./shared";

/**
 * Wrapping in `Selectable` results in `.getDeclarations` {@link file://./main.ts} returning `undefined`
 */
export type BookMapper = Selectable<BookTable>;
