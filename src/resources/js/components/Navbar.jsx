import { List, ListItem, Card } from "@material-tailwind/react";

export default function Navbar() {
    return (
        <>
            <Card className="w-full">
                <List>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </List>
            </Card>
        </>
    );
}
