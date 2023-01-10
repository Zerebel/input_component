const Input = ({
  ParagraphClass,
  inputClass,
  labelClass,
  disabled,
  text,
  desc,
  descClass,
  value,
  full,
}) => {
  return (
    <td className="flex flex-col gap-4">
      <Paragraph text={text} className={` text-[#333333] ${ParagraphClass}`} />
      <div className="flex  gap-1 flex-col-reverse">
        {desc ? (
          <Paragraph
            text={desc}
            className={`text-[0.625rem] font-notoSans leading-3 ${descClass}`}
          />
        ) : undefined}
        <input
          type="text"
          name="input"
          id="lab"
          className={`outline outline-1 rounded-lg h-10 md:h-14 px-1 md:px-2 peer ${
            full ? 'w-full' : 'md:w-[9.8rem] lg:w-48'
          } ${inputClass}`}
          placeholder="Placeholder"
          disabled={disabled ? true : false}
          defaultValue={value ? value : undefined}
        />

        <label
          htmlFor="lab"
          className={`font-notoSans text-xs font-normal text-[#333333] ${labelClass}`}>
          Label
        </label>
      </div>
    </td>
  );
};

const Paragraph = ({ text, className }) => {
  return <p className={`font-ubuntu text-xs leading-3 ${className}`}>{text}</p>;
};

const Anchor = ({ text, link, className }) => {
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
};

const List = ['Typography', 'Grid', 'Buttons', 'Inputs'];
const ModifiedList = () =>
  List.map((item) => {
    return (
      <li
        key={item}
        className={
          item === 'Inputs' ? 'text-[#090F31] font-bold' : 'text-[#9E9E9E]'
        }>
        {item}
      </li>
    );
  });
function App() {
  const OpenMenu = () => {
    const menu = document.querySelector('.menu');
    const button = document.querySelector('.menu-button');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      return (button.textContent = 'close');
    }
    menu.classList.add('hidden');
    return (button.textContent = 'menu');
  };
  return (
    <main className="bg-[#ffffff] md:h-screen lg:h-auto px-2 md:px-0">
      <div className="flex flex-col md:flex-row md:h-full relative">
        <span
          className="material-icons self-end text-3xl cursor-pointer md:hidden menu-button"
          onClick={() => OpenMenu()}>
          menu
        </span>
        <aside className="bg-[hsl(220,43%,99%)] py-6 px-10 absolute hidden md:block right-0 top-10 md:relative md:top-auto  md:left-auto menu">
          <nav className="flex flex-col gap-8 md:gap-14 ">
            <Anchor
              text={'challenges.io'}
              link={'https://devchallenges.io/'}
              className={
                'before:content-["Dev"] before:text-[#F7542E] text-[#090f31] font-poppins text-sm font-semibold leading-5'
              }
            />
            <ul className="font-noto text-sm font-medium leading-5 flex flex-col gap-7">
              <ModifiedList />
            </ul>
          </nav>
        </aside>
        {/* Inputs */}
        <article className="md:mt-4 lg:mt-5 md:px-4 lg:px-10 w-full">
          <p className="text-[#4F4F4F] font-poppins lg:text-2xl leading-9 text-xl">
            Inputs
          </p>
          <div className=" mt-10 md:mt-14 ">
            {/* first two rows */}
            <table className="flex flex-col gap-11 w-fit">
              {/* row 1 */}
              <tr className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8">
                <Input
                  text={'<Input />'}
                  labelClass="text-[#333333]"
                  inputClass={'outline-[#828282] placeholder:text-[#828282]'}
                />
                <Input
                  text={'&:hover'}
                  ParagraphClass={'text-[#828282]'}
                  labelClass="text-[#333333]"
                  inputClass={
                    'outline-[#828282] hover:outline-[#333333] placeholder:text-[#828282]'
                  }
                />
                <Input
                  text={'&:focus'}
                  ParagraphClass={'text-[#828282]'}
                  labelClass="text-[#333333] peer-focus:text-[#2962FF]"
                  inputClass={
                    'outline-[#828282] focus:outline-[#2962FF] placeholder:text-[#828282]'
                  }
                />
              </tr>
              {/* row 2 */}
              <tr className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8">
                <Input
                  text={'<Input error />'}
                  labelClass={'text-[#D32F2F]'}
                  inputClass="outline-[#D32F2F]"
                />

                <Input
                  text={'&:hover'}
                  ParagraphClass="text-[#828282]"
                  labelClass={'text-[#D32F2F] peer-hover:text-[#333333]'}
                  inputClass="outline-[#D32F2F] hover:outline-[#333333]"
                />

                <Input
                  text={'&:focus'}
                  ParagraphClass="text-[#828282]"
                  labelClass={'text-[#D32F2F] peer-focus:text-[#D32F2F]'}
                  inputClass="outline-[#D32F2F] focus:outline-[#D32F2F]"
                />
              </tr>
              <tr className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8">
                <Input
                  text={'<Input disabled />'}
                  inputClass="bg-[#f2f2f2] outline-[#E0E0E0]"
                  disabled={true}
                />
              </tr>
              <tr className="grid grid-cols-2 gap-8 lg:gap-0 ">
                <Input
                  text={'<Input helperText=”Some interesting  text”/>'}
                  inputClass="md:w-min outline-[#828282]"
                  desc={'Some interesting text'}
                  descClass={'text-[#828282]'}
                />

                <Input
                  text={'<Input helperText=”Some interesting text” error />'}
                  ParagraphClass="md:text-[0.65rem] lg:text-xs"
                  inputClass="md:w-min outline-[#D32F2F]"
                  labelClass={'text-[#D32F2F]'}
                  desc={'Some interesting text'}
                  descClass={'text-[#D32F2F]'}
                />
              </tr>
              {/* Icons row */}
              <tr className="grid grid-cols-2 gap-8 lg:gap-0">
                <td className="flex flex-col gap-4">
                  <Paragraph text={'<Input startIcon />'} />
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lab" className="text-[#333333] text-xs">
                      Label
                    </label>
                    <div className="flex outline outline-1 gap-2 outline-[#828282] rounded-lg items-center md:w-[9.8rem] lg:w-48 px-1">
                      <span class="material-icons text-[#828282]">phone</span>
                      <input
                        type="text"
                        name=""
                        id="lab"
                        className="h-10 md:h-14 focus:outline-none w-full"
                        placeholder="Placeholder"
                      />
                    </div>
                  </div>
                </td>
                <td className="flex flex-col gap-4">
                  <Paragraph text={'<Input endIcon />'} />
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lab" className="text-[#333333] text-xs">
                      Label
                    </label>
                    <div className="flex outline outline-1 gap-2 outline-[#828282] rounded-lg items-center md:w-[9.8rem]  lg:w-48 px-1 flex-row-reverse">
                      <span class="material-icons text-[#828282]">lock</span>
                      <input
                        type="text"
                        name=""
                        id="lab"
                        className="h-10 md:h-14 focus:outline-none w-full"
                        placeholder="Placeholder"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              {/* value row */}
              <tr className="grid grid-cols-2 gap-8 lg:gap-0">
                <Input
                  text={'<Input value=”text” />'}
                  inputClass={'outline-[#828282]'}
                  value={'Text'}
                />
              </tr>
              {/* sizes row */}
              <tr className="grid grid-cols-2 gap-8 lg:gap-0">
                <Input
                  text={'<Input size=”sm” />'}
                  inputClass="h-8 md:h-8 outline-[#828282] rounded-sm md:rounded-md"
                />
                <Input
                  text={'<Input size=”md” />'}
                  inputClass="outline-[#828282]"
                />
              </tr>
              {/* full width row */}
              <tr className="grid">
                <Input
                  text={'<Input fullWidth />'}
                  inputClass="w-full outline-[#828282]"
                  full={'w-full'}
                />
              </tr>

              {/* multiline row */}
              <tr className="grid grid-cols-2">
                <td className="flex flex-col gap-4">
                  <Paragraph text={'<Input multiline row=”4” />'} />
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lab" className="text-[#333333] text-xs">
                      Label
                    </label>

                    <textarea
                      type="text"
                      className="outline outline-1 outline-[#828282] rounded-lg md:w-[9.8rem] lg:w-48 px-1 py-2 resize-none"
                      placeholder="Placeholder"
                      cols="30"
                      rows="4"></textarea>
                  </div>
                </td>
              </tr>
            </table>
            {/* footer */}
            <div className="mt-8 mb-2 text-center md:text-start">
              <p className="text-[#9E9E9E] font-montserrat text-xs md:text-sm">
                created by{' '}
                <Anchor
                  text={'Zerebel'}
                  link="https://github.com/Zerebel"
                  className={' font-semibold'}
                />{' '}
                - devChallenges.io
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;
