import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

type ThemeStateType = 'primary' | 'secondary'

function UseContextBasicChildren() {
    const theme = useContext(ThemeContext)
    const [themeState, setThemeState] = useState<ThemeStateType>('primary')

    const handleRadioOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThemeState(e.target.value as ThemeStateType)
    }

    return (
        <div>
            <h3>Get & Set Theme</h3>
            <form>
                <label htmlFor="theme-primary">
                    Primary
                    <input id="theme-primary" type="radio" name="theme" value="primary" checked={themeState === 'primary'} onChange={handleRadioOnChange} />
                </label>
                <label htmlFor="theme-secondary">
                    Secondary
                    <input type="radio" name="theme" value="secondary" checked={themeState === 'secondary'} onChange={handleRadioOnChange} />
                </label>
            </form>
            <div style={{ background: theme[themeState].main, color: theme[themeState].text}}>Theme Context Box</div>
        </div>
    );
}

export default UseContextBasicChildren;