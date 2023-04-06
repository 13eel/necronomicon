import { useEffect, useState } from "react";
import Tab from "~/components/ui/Tab";

interface Props {
  tabs: Record<string, string>;
  onChange?: (key?: string) => void;
}

const Tabs = ({ tabs, onChange }: Props) => {
  const [selected, setSelected] = useState<string>(Object.keys(tabs)[0] || "");

  useEffect(() => {
    onChange && onChange(selected);
  }, [selected, onChange]);

  return (
    <div className="tabs">
      {Object.keys(tabs).map((key) => (
        <Tab
          className="grow"
          key={key}
          onClick={() => setSelected(key)}
          active={selected === key}
        >
          {tabs[key]}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
