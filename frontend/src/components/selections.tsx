import { useState } from "react";

type languageTypes = {
  displayName: string;
  language: string;
};
function Selections() {
  //text
  // set method
  // setter value
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

  const [selectedLanguage, setSelectedLanguage] = useState<
    undefined | languageTypes
  >();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <div onClick={() => setIsOpen(!isOpen)}>
          {selectedLanguage ? selectedLanguage.displayName : "Input Language"}
        </div>
        {isOpen ? (
          <div>
            {languageList.map((lang) => (
              <div onClick={() => setSelectedLanguage(lang)}>
                {lang.displayName}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Selections;
