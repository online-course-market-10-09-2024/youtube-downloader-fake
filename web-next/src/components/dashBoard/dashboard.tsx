import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Dashboard = () => {
    const [links, setLinks] = useState<string[]>([""]);

    const addLink = () => {
        setLinks([...links, ""]);
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen w-1/2">
            {links.map((link, index) => (
                <div key={index} className="mb-4 flex flex-row">
                    <Input 
                        value={link} 
                        onChange={(e) => {
                            const newLinks = [...links];
                            newLinks[index] = e.target.value;
                            setLinks(newLinks);
                        }} 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {index === links.length - 1 && (
                        <Button onClick={addLink} className="ml-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add</Button>
                    )}
                </div>
            ))}
            <Button onClick={() => {}} className="w-full ml-3 p-2 bg-green-500 text-white rounded hover:bg-green-700">Download</Button>
        </div>
    );
};