export interface phonetics {
  text: string;
  audio?: string | any;
}

export interface definitions {
  definition: string;
  example?: string | any;
  synonyms?: string[] | any;
  antonyms?: string[] | any;
}

export interface meanings {
  partOfSpeech: string;
  definitions: definitions[];
}

export interface dictionary {
  word: string;
  phonetic?: string | any;
  phonetics?: phonetics[] | any;
  origin?: string | any;
  meanings?: meanings[] | any;
}

export interface propsCard {
  definition: dictionary[];
}
