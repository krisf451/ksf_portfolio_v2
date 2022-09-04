/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../hooks/useDarkMode';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DarkModeToggle = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkmode, setDarkmode] = useDarkMode();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setDarkmode(enabled);
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-customBlack1' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-none ml-2',
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-600' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          )}
          aria-hidden="true"
        >
          <BsFillSunFill className="text-black" />
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 ease-in duration-600' : 'opacity-0 ease-out duration-100',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          )}
          aria-hidden="true"
        >
          <MdDarkMode className="text-black" />
        </span>
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
