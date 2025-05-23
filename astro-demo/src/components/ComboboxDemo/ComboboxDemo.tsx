"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "../../lib/utils";
import type { IChooseServiceAreas } from "../../graphql/generatedType/ResponseType";
import L, { type LatLngLiteral } from "leaflet";
import type { FranchiseLocationWithDistance } from "../../hooks/useProximityLocation";
import useProximitySearch from "../../hooks/useProximityLocation";
import usePostalCode from "../../hooks/usePostalCode";



export default function ComboboxDemo({
  list,
  onSelectValue,
  postalCode,
}: // nearestLocations
{
  list: IChooseServiceAreas;
  onSelectValue: (data: LatLngLiteral) => void;
  postalCode: string;
  //  nearestLocations:FranchiseLocationWithDistance[]
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const {
    coordinates,
    loading,
    error,
    getLocationAndPostalCode,
    postalCode: newPostalCodeFetch,
    retryFetch,
    fetchPostalCode,
  } = usePostalCode();

  const onValueSelect = (value: string) => {
    const location = nearestLocations.find(
      (data) => data.node.serviceAreaPurpose.mapAreaAddress === value
    )?.node.serviceAreaPurpose;
    fetchPostalCode(location.locationLat, location.locationLong);
  };

  React.useEffect(() => {
    if (newPostalCodeFetch) setValue(newPostalCodeFetch);
  }, [newPostalCodeFetch]);

  console.log(value, newPostalCodeFetch, "selected value");

  const {
    findNearestLocations,
    nearestLocations,
    loading: proximityLoading,
    error: proximityError,
  } = useProximitySearch(list.edges);

  const handleSearch = async(e: any) => {
    await findNearestLocations(e.target.value);
  };

  const filterValue = (currentValue: string) => {
    const location = nearestLocations.find(
      (data) => data.node.serviceAreaPurpose.mapAreaAddress === currentValue
    )?.node.serviceAreaPurpose;

    onSelectValue({lat:location.locationLat, lng:location.locationLong});
  };

  const fetchInit = async() =>{
    await findNearestLocations(postalCode);
  } 

  React.useEffect(() => {
    if (postalCode && !newPostalCodeFetch) setValue(postalCode);
    fetchInit()
  }, [postalCode]);

 
console.log(proximityError,"proximityError")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between translate-y-0 bg-white !text-black hover:!text-white"
        >
          {/* {value
            ? list?.edges.find(
                (framework) =>
                  framework.node.serviceAreaPurpose.mapAreaAddress === value
              )?.node.serviceAreaPurpose.mapAreaAddress
            : "Select City..."} */}
          {value ?? "Select City..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!w-[300px] p-0 bg-white z-[2000]">
        <Command shouldFilter={false} >
          <CommandInput

            placeholder="Search City..."
            className="h-9"
            onChangeCapture={handleSearch}
          />
          <CommandList>
            {/* <CommandEmpty>No location found.</CommandEmpty> */}
            <CommandGroup>
              {proximityLoading ? (
                <CommandEmpty>Loading...</CommandEmpty>
              ) : (
                <>
                {
                  proximityError !== null ?
                  <p>No location found.</p>
                  :
                  <>
                  {nearestLocations.map((framework) => (
                    <CommandItem
                      key={framework.node.serviceAreaPurpose.mapAreaAddress}
                      value={framework.node.serviceAreaPurpose.mapAreaAddress}
                      onSelect={(currentValue) => {
                        // console.log(currentValue,"currentValue")
                        onValueSelect(currentValue);
                        setOpen(false);
                        filterValue(currentValue);
                      }}
                    >
                      {framework.node.serviceAreaPurpose.mapAreaAddress}
                      <Check
                        className={cn(
                          "ml-auto",
                          value ===
                            framework.node.serviceAreaPurpose.mapAreaAddress
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                  
                  </>
                }
                </>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
