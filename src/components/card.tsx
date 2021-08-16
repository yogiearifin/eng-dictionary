import { definitions, dictionary, meanings, phonetics } from "../types/types";

export const Cards: React.FC<dictionary> = ({
  word,
  phonetic,
  phonetics,
  origin,
  meanings,
}) => {
  return (
    <div>
      <h1>{word}</h1>
      <p>Origin: {origin}</p>
      {phonetic ? <p style={{ fontWeight: "bold" }}>{phonetic}</p> : null}
      {phonetics
        ? phonetics.map((item: phonetics, index: number) => {
            return (
              <div>
                <p style={{ fontStyle: "italic" }}>{item.text}</p>
                {item.audio ? (
                  <a
                    href={item.audio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>click here to listen</p>
                  </a>
                ) : null}
              </div>
            );
          })
        : null}
      <ul>
        {meanings?.map((item: meanings, index: number) => {
          return (
            <div key={index}>
              <p>Part Of Speech : {item.partOfSpeech}</p>
              {item.definitions.map((def: definitions, idx: number) => {
                return (
                  <div>
                    <li style={{ fontStyle: "italic" }} key={idx}>
                      {def.definition}
                    </li>
                    <p>
                      Antonyms:
                      {def.antonyms
                        ? def.antonyms.map((ant: string, idx: number) => {
                            return (
                              <span key={idx}>
                                {idx === def?.antonyms?.length - 1
                                  ? `${ant}`
                                  : `${ant},`}
                              </span>
                            );
                          })
                        : "none"}
                    </p>
                    <p>
                      Synonyms:
                      {def.synonyms
                        ? def.synonyms.map((syn: string, idx: number) => {
                            return (
                              <span key={idx}>
                                {idx === def?.synonyms?.length - 1
                                  ? `${syn}`
                                  : `${syn},`}
                              </span>
                            );
                          })
                        : "none"}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
