import { SecondProps } from "./SecondComponent.types";

export const SecondComponent = (props: SecondProps): JSX.Element => {
    return <div>
        <h1>{props.text}-{props.specific}</h1>
    </div>
}
