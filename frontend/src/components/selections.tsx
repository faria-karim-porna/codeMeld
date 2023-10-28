import { useState } from "react";
import { languageTypes } from "../types/languageTypes";

type SelectionProps = {
  text: string;
  selectedLanguage?: languageTypes;
  setSelectedLanguage: React.Dispatch<
    React.SetStateAction<undefined | languageTypes>
  >;
};
function Selections(props: SelectionProps) {
  const { text, selectedLanguage, setSelectedLanguage } = props;

  const languageList: languageTypes[] = [
    { displayName: "JavaScript", language: "javascript" },
    { displayName: "Python", language: "python" },
    { displayName: "C", language: "c" },
    { displayName: "C++", language: "c" },
    { displayName: "PHP", language: "php" },
    { displayName: "Java", language: "java" },
    { displayName: "C#", language: "csharp" },
    { displayName: "Go", language: "go" },
    { displayName: "Dart", language: "dart" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="selection">
      <div className="selection-container">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={
            isOpen
              ? "open-selection-box"
              : selectedLanguage
              ? "active-selection-box"
              : "selection-box"
          }
        >
          {selectedLanguage ? selectedLanguage.displayName : text}
        </div>
        {isOpen ? (
          <div className="selection-dropdown">
            {languageList.map((lang) => (
              <div
                onClick={() => {
                  setSelectedLanguage(lang);
                  setIsOpen(!isOpen);
                }}
                className="selection-options"
              >
                {lang.displayName}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Selections;
