import { SecondProps } from "./SecondComponent.types";
import 'tailwindcss/tailwind.css'

export const SecondComponent = (props: SecondProps): JSX.Element => {
    return <div className="mylib-w-24 mylib-bg-gray-200">
        <h1>{props.text}-{props.specific}</h1>
    </div>
}
