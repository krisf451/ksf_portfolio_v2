/* eslint-disable jsx-a11y/media-has-caption */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ProjectModal = ({ open, setOpen, project }) => {
  const videoRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 shadow-xl transition-all max-w-[700px]">
                <div className="flex flex-col items-center pr-4 gap-4 w-full p-4">
                  <h3 className="animate-slideup text-3xl tracking-wider uppercase underline">{project.title}</h3>
                  <div className="flex gap-2 my-2 font-medium">
                    <button type="button" className="fadeBtn hover:animate-makeItfadeIn py-2 px-4 rounded-sm border border-gray-300 focus:outline-none">
                      <a href={project?.codeLink} target="_blank" rel="noreferrer">{project.codeLink ? 'Code' : 'N/A'}</a>
                    </button>
                    <button type="button" className="fadeBtn hover:animate-makeItfadeIn py-2 px-4 rounded-sm border border-gray-300 focus:outline-none">
                      <a href={project?.projectLink} target="_blank" rel="noreferrer">Live</a>
                    </button>
                  </div>
                  <p>{project.description}</p>
                  <div className="text-gray-400 dark:text-gray-600 flex flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i}>#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    src={project?.video?.asset?.url}
                    className="object-contain"
                  />
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="fadeBtn p-3 border border-gray hover:animate-makeItfadeIn w-full"
                    onClick={() => setOpen(false)}
                  >
                    Go back to Projects
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProjectModal;
