import { Card, CardBody, Navbar } from "@material-tailwind/react";
import "./bootstrap";
import Typography from "@material-tailwind/react";

export default function App() {
    return (
        <>
            <Card className="p-2" shadow={false}>
                <Navbar />
            </Card>
        </>
    );
}
