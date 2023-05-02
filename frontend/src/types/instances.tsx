export class EmptyInputError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'EmptyInputError';
    }
  }
  
export class InvalidDataFormatError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'InvalidDataFormatError';
    }
}

export type Props = {
  surface: number[];
  waterBlocks: number[][];
};
