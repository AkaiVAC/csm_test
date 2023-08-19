import { useEffect, useRef, useState } from 'react';
import {
    DropdownContainer,
    DropdownIcon,
    DropdownLink,
    DropdownList,
    DropdownListItem,
} from './index.styles';

export type DropdownProps = {
    name: string;
    icon: string;
    entries: Array<{ name: string; destination?: string }>;
};

const Dropdown = ({ name, icon, entries }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
            if (
                open &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open, dropdownRef]);

    return (
        <DropdownContainer onClick={() => setOpen(true)}>
            {name}
            {icon && (
                <DropdownIcon
                    src={`icons/${icon}.svg`}
                    alt=''
                    width='100%'
                    height='auto'
                />
            )}
            {open && (
                <DropdownList ref={dropdownRef}>
                    {entries.map((entry, index) => (
                        <DropdownListItem
                            key={index}
                            onClick={() => setOpen(false)}
                        >
                            {entry.destination ? (
                                <DropdownLink href={entry.destination}>
                                    {entry.name}
                                </DropdownLink>
                            ) : (
                                entry.name
                            )}
                        </DropdownListItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default Dropdown;
