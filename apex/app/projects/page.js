export default Projects;

export const metadata = {
  title: 'Projects',
  description: 'Wip',
}

function Projects() {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-center font-bold py-8">Projects</h1>

      <div className="pb-4">
        <h2 className="text-xl">Featured</h2>
        <p>* Quantum (wip)</p>
        <p>* ocl-rs</p>
        <p>* Open Source (wip)</p>
      </div>

      <div className="pt-4">
        <h2 className="text-xl">Smaller</h2>
        <p>* Dotfiles</p>
        <p>* Remote Desktop (wip)</p>
        <p>* skoh-dev</p>
        <p>* skoh-tv</p>
      </div>

    </div>
  );
}
