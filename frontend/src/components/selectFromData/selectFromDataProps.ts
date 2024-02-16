interface SelectFromDataProps {
    name: string;
    data: string[];
    chosen: string;
    setChosen: React.Dispatch<React.SetStateAction<string>>;
    dataTranslate: (key: string, index? : number) => string;
}