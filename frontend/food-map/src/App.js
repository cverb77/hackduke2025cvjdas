/* eslint-disable no-unused-vars */
import Map from './components/Map';
import Nav from './components/Nav';
import AddPoints from './components/AddPoints';

function App() {
  return (
    <div
      className="relative h-screen w-full"
    >
      <Nav className="" />
      
      <div className="rounded-full h-[170rem] w-[170rem] fixed opacity-50 z-0 custom-gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <h1 className='text-white text-8xl font-semibold text-shadow-2 mt-72 text-center z-10 relative'>
        Placeholder Text
      </h1>
      <h2 className='text-white text-5xl text-shadow-2 mt-10 text-center z-10 relative'>
        Sub-placeholder Text
      </h2>
      <div className='w-full px-72 z-10 relative'>
        <div className="bg-[#1d1d1d] w-full h-48 mt-24 rounded-tl-[4rem] rounded-tr-[4rem] flex">
          <div className="flex-1 border-r-2 border-gray-500 flex justify-center text-white text-5xl font-semibold font-blinker">
            <p className='self-center'>STAT 1</p>
          </div>
          <div className="flex-1 border-r-2 border-gray-500 flex justify-center text-white text-5xl font-semibold font-blinker">
            <p className='self-center'>STAT 2</p>
          </div>
          <div className="flex-1 border-r-2 border-gray-500 flex justify-center text-white text-5xl font-semibold font-blinker">
            <p className='self-center'>STAT 3</p>
          </div>
          <div className="flex-1 flex justify-center text-white text-5xl font-semibold font-blinker">
            <p className='self-center'>STAT 4</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full z-10 relative -mt-[9rem]">
        <div className="w-full px-72 overflow-clip h-[55rem]">
          <AddPoints className="h-full" />
        </div>
      </div>

      <div className='w-full px-72 z-10 relative -mt-[9rem]'>
        <div className="bg-[#1d1d1d] w-full h-[60rem] mt-24 rounded-[4rem] flex flex-col gap-5 p-24">
          <h1 className='text-white text-6xl'>Contribute</h1>
          <h3 className='text-white text-xl'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus platea nascetur vestibulum ligula primis nullam orci. Volutpat a litora facilisi nisl imperdiet. Gravida urna neque hac metus pretium fermentum porttitor. Finibus fames sapien odio nullam lacinia ante ornare. Facilisi auctor ullamcorper maecenas ante cubilia vel per ad mattis. Eget consequat velit euismod sit finibus urna per. Faucibus vel vehicula metus auctor arcu elit nostra.

            Enim natoque class nisi phasellus sollicitudin. Semper aliquam porta facilisi montes sit. Mollis cubilia ultrices est in ad facilisi parturient. Dui congue semper leo quisque hendrerit rhoncus. Curabitur consequat viverra dui fringilla commodo suspendisse finibus. Tempus conubia nam dui luctus tempor nisl. Dictumst erat habitant integer cras felis.

            Tristique purus porttitor vestibulum, sodales rhoncus quis ultricies. Elit cubilia porta fames maecenas etiam nam. Quam nam gravida class potenti hac nisl tristique. Neque luctus nunc rutrum quisque ex amet nostra volutpat. Lectus magna ornare taciti nulla bibendum orci et cubilia facilisis. Auctor habitant aenean accumsan vestibulum imperdiet in rhoncus. Torquent duis montes a porttitor platea blandit aliquet hac. Aenean nunc etiam feugiat ipsum est.

            Litora mauris maecenas luctus; placerat augue adipiscing habitasse? Cursus conubia sem, ligula nam phasellus gravida nisl. Massa nunc tristique in himenaeos volutpat platea ac. Consectetur placerat bibendum vivamus scelerisque praesent. Posuere tempus cubilia aliquet dolor elit eget cubilia. Tempus maecenas molestie tortor iaculis vivamus. Nisl porttitor nullam massa felis habitasse cras.

            Fames ut nisi; sem nascetur cubilia fringilla. Natoque feugiat aptent conubia nisi cras nisi metus ullamcorper. Fringilla consequat et in blandit senectus nibh facilisi dui. Purus bibendum nisl lacus metus adipiscing conubia. Sit dictum vel maximus venenatis praesent. Molestie vehicula maecenas class nisi rutrum? Sodales hendrerit arcu fusce; ad sit per.

            Lobortis a tellus sit congue tempus class eleifend. Purus congue imperdiet est, dictum sed vitae lacinia. Aptent vulputate curabitur tempus velit enim; cubilia dis. Suscipit quam interdum quis tempus senectus accumsan urna convallis. Suspendisse efficitur platea consectetur eleifend ante. Pharetra erat elementum mattis tincidunt condimentum dapibus egestas cubilia. Porta finibus montes convallis malesuada eget sem etiam imperdiet.

            Tristique diam netus auctor facilisis finibus elit mus dolor. Interdum litora curabitur tortor volutpat mi tempor metus tortor. Rutrum efficitur eget leo suspendisse euismod aliquet imperdiet. Magna ligula integer, nulla bibendum consequat sem ligula magnis. Morbi penatibus aptent mollis taciti sem sit. Consectetur rutrum platea tellus est aenean magna accumsan dapibus montes. Hac est ullamcorper torquent per eget convallis sed. Integer curabitur volutpat auctor mollis quis ligula, finibus habitasse et. Consequat sodales nascetur efficitur dis himenaeos rhoncus.

            Parturient donec lacus vivamus tincidunt nascetur accumsan aliquet justo torquent. Vitae nec litora parturient quisque sem; nibh augue per. Mus sapien tellus nunc pharetra, volutpat cursus netus. Habitant lectus sodales ac suspendisse vulputate. Proin habitasse placerat nisi; netus donec tincidunt ex ac. Tellus amet a enim laoreet at. Curabitur aptent maecenas blandit feugiat mattis gravida id fermentum. Turpis convallis ac nascetur inceptos urna? Accumsan congue vulputate odio id gravida hac mollis ornare.
          </h3>
          <button className="w-96 h-24 mt-12 bg-[#8cb638] flex justify-center self-center items-center rounded-xl text-white text-2xl font-semibold">
            Help Make a Difference
          </button>

        </div>
      </div>

      <div className='h-36'>

      </div>

    </div>
  );
}

export default App;
