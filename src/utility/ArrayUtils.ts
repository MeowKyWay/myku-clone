interface NamedObject {
    name: string;
}

interface IdObject {
    id: string;
}

export default class ArrayUtils {
    static filterByName<T extends NamedObject>(array: T[], term: string): T[] {
        return array.filter(item => this.containIgnoreCase(item.name, term));
    }

    static removeByName<T extends NamedObject>(array: T[], term: string): T[] {
        return array.filter(item => !this.containIgnoreCase(item.name, term));
    }

    static containIgnoreCase(str: string, term: string): boolean {
        return str.toLowerCase().includes(term.toLowerCase());
    }

    static filterByIdArray<T extends IdObject>(array: T[], term: string[]): T[] {
        return array.filter(item => term.includes(item.id));
    }

    static findByName<T extends NamedObject>(array: T[], term: string): T | undefined {
        return array.find(item => this.containIgnoreCase(item.name, term));
    }

    static findById<T extends IdObject>(array: T[], term: string): T | undefined {
        return array.find(item => item.id === term);
    }
}
