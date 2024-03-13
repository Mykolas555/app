import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandInput } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { fetchCityData } from "@/services/forecastService";

const CityAutocomplete = ({ onCitySelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCityData();
        setCityData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSelectItem = (city) => {
    if (city) {
      setSelectedItem(city);
      setOpen(false);
    if (onCitySelect) {
      onCitySelect(city);
    }
  }
};

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedItem ? selectedItem : "Select City..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {cityData?.map((city)=>(
              <CommandItem key={city.code} onSelect={() => handleSelectItem(city.name)}>
                {city.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CityAutocomplete;
