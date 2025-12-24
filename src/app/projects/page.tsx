import { Building2, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Luxury Residential Complex',
      location: 'Downtown City Center',
      type: 'Residential',
      status: 'Completed',
      units: '50 Apartments'
    },
    {
      title: 'Modern Office Tower',
      location: 'Business District',
      type: 'Commercial',
      status: 'Ongoing',
      units: '20 Floors'
    },
    {
      title: 'Green Valley Villas',
      location: 'Suburban Area',
      type: 'Residential',
      status: 'Completed',
      units: '30 Villas'
    },
    {
      title: 'Tech Park Complex',
      location: 'IT Corridor',
      type: 'Commercial',
      status: 'Planning',
      units: '15 Buildings'
    },
    {
      title: 'Smart City Apartments',
      location: 'New Development Zone',
      type: 'Residential',
      status: 'Ongoing',
      units: '100 Units'
    },
    {
      title: 'Shopping Mall Renovation',
      location: 'Central Market',
      type: 'Commercial',
      status: 'Completed',
      units: '200+ Stores'
    }
  ];
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600">Showcasing excellence in construction and development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-48 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-white opacity-50" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full">
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                </div>
                <div className="text-gray-600">{project.units}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
