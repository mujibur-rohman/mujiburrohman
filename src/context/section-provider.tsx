import { createContext, useState, useCallback } from "react";

type Props = {
  children: React.ReactNode;
};

export type SectionType = {
  sectionHandler: (section: string) => void;
  section: string;
};

export const SectionContext = createContext<SectionType>({
  section: "",
  sectionHandler: () => {},
});

function SectionProvider({ children }: Props) {
  const [section, setSection] = useState<string>("");

  console.log(section);

  const changeSection = useCallback(
    (section: string) => {
      setSection(section);
    },
    [section]
  );
  return (
    <SectionContext.Provider value={{ section, sectionHandler: changeSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
