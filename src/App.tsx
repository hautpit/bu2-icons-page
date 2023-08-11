import React, { useEffect, useState } from "react";
import "bu2-ui/dist/styles/global.css";
import "./App.css";
import "./styles/global.css";
import "./styles/home.css";
import { iconSections, IconSectionProps } from "./mock/icons";
import IconPreview from "./components/common/IconPreview";
import { Input } from "bu2-ui";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [iconSectionsData, setIconSectionsData] =
    useState<IconSectionProps[]>(iconSections);

  useEffect(() => {
    const iconSectionsTmp: IconSectionProps[] = [];
    iconSections.map((iconSection) => {
      const iconSectionTmp = { ...iconSection };
      const iconsTmp = iconSection.icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchText.toLowerCase())
      );
      if (iconsTmp.length > 0) {
        iconSectionTmp.icons = iconsTmp;
        iconSectionsTmp.push(iconSectionTmp);
      }
    });
    setIconSectionsData(iconSectionsTmp);
  }, [searchText]);

  return (
    <div className="main-container">
      <h2>Becawork Icons</h2>
      <div>
        <Input
          placeholder="Search..."
          onChange={(ele) => setSearchText(ele.target.value)}
        />
      </div>
      <div className="icon-section">
        {iconSectionsData.map((iconSection, index) => (
          <div key={index}>
            <h3>{iconSection.title}</h3>
            <div className="icons-wrap">
              {iconSection.icons.map((icon) => (
                <IconPreview
                  key={icon.name}
                  name={icon.name}
                  icon={icon.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
