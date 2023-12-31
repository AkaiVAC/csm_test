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
        <DropdownContainer
            onClick={() => setOpen(true)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpen(!open);
                }
            }}
            tabIndex={0}
        >
            {name}
            {icon && (
                <DropdownIcon
                    src={`icons/${icon}.svg`}
                    alt=''
                    width='15'
                    height='9'
                    tabIndex={-1}
                />
            )}
            {open && (
                <DropdownList ref={dropdownRef} tabIndex={-1}>
                    {entries.map((entry, index) => (
                        <DropdownListItem
                            key={index}
                            tabIndex={-1}
                            onClick={() => setOpen(false)}
                        >
                            {entry.destination ? (
                                <DropdownLink
                                    href={entry.destination}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === 'Enter' ||
                                            e.key === ' '
                                        ) {
                                            e.preventDefault();
                                            e.currentTarget.click();
                                        }
                                    }}
                                >
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
