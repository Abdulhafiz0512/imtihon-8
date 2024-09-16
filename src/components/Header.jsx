import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const { selectedCountries } = useSelector((store) => store.selectedCountries);
  
  return (
    <div className="max-w-[1140px] flex justify-between items-center bg-gray-200 mx-auto p-2 px-4 rounded-md mb-2">
      <h1>Header</h1>
      <Link to="/countries/chart">Chart</Link>
      <Button onClick={() => setIsOpen(true)}>Tanlanganlar</Button>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Tanlanganlar" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedCountries.map((country) => (
                        <Sidebar.Item
                          key={country.cca2}
                          className="flex flex-col items-center space-y-2"
                        >
                          <span>{country.name}</span>
                          <img
                            src={country.flagURL}
                            alt={`${country.name} flag`}
                            className="w-20 h-12 object-cover"
                          />
                        </Sidebar.Item>
                      ))}
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}
