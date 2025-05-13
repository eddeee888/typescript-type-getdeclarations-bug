import * as ts from "typescript";

const program = ts.createProgram([process.env.SOURCE || ""], {});

const checker = program.getTypeChecker();

for (const sourceFile of program.getSourceFiles()) {
  if (!sourceFile.isDeclarationFile) {
    ts.forEachChild(sourceFile, visit);
  }
}

function visit(node: ts.Node): void {
  if (
    ts.isTypeAliasDeclaration(node) &&
    node.name &&
    node.name.text === "BookMapper"
  ) {
    const type = checker.getTypeAtLocation(node);
    console.dir(
      {
        properties: type.getProperties().map((prop) => {
          return {
            propName: prop.getName(),
            declarations: prop.getDeclarations(),
          };
        }),
      },
      { depth: 4 }
    );
  }
}
