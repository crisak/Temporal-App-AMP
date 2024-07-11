export interface ParseGql {
    kind: string;
    definitions: Definition[];
    loc: LOC;
}

interface Definition {
    kind: string;
    operation: string;
    name: Name;
    variableDefinitions: VariableDefinition[];
    directives: any[];
    selectionSet: SelectionSet;
}

interface Name {
    kind: NameKind;
    value: string;
}

enum NameKind {
    Name = "Name",
}

interface Selection {
    kind: SelectionKind;
    name: Name;
    arguments: Argument[];
    directives: any[];
    selectionSet?: SelectionSet;
}

interface SelectionSet {
    kind: string;
    selections: Selection[];
}

interface Argument {
    kind: string;
    name: Name;
    value: Variable;
}

interface Variable {
    kind: string;
    name: Name;
}

enum SelectionKind {
    Field = "Field",
}

interface VariableDefinition {
    kind: string;
    variable: Variable;
    type: Type;
    directives: any[];
}

interface Type {
    kind: string;
    type?: Variable;
    name?: Name;
}

interface LOC {
    start: number;
    end: number;
}
