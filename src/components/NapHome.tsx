import { HomeProps } from "./NapHome.types";

export function NapHome(props: HomeProps): JSX.Element {
    return <div>
        <h1>{props.text}</h1>
    </div>
}

