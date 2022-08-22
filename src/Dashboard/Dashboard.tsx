import * as React from 'react';
import Chart from '../components/Chart/Chart';
import Table from '../components/Table/Table';
import { IData } from '../types/types';
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 1;
const MAX = 4;

export interface IDashboardProps {}

export interface IDashboardState {
  data: IData[];
  values: number[];
}

export default class Dashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  constructor(props: IDashboardProps) {
    super(props);

    this.state = {
      data: [],
      values: [1],
    };
  }

  componentDidMount() {
    fetch('./data/data.json')
      .then((response) => response.json())
      .then((data) => {
        // populate the empty data list with data from data.json
        this.setState({ data: data });
      });
  }

  public render() {
    const { data, values } = this.state;
    return (
      <div className="container lg:w-[1000px] mx-auto">
        <div className="flex flex-col text-center w-full my-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {data.length > 0 ? data[values[0] - 1].title : 'Loading...'}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base px-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            repudiandae adipisci nihil corrupti soluta ab a expedita doloribus
            ea delectus illo perspiciatis vitae, aperiam tempora? Quisquam iure
            amet sunt laborum!
          </p>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:py-16 mx-auto flex flex-wrap">
            <div className="md:w-1/2 py-10">
              <div className="container px-5 mx-auto">
                <div className="w-full mx-auto overflow-auto">
                  <Table attributes={data[values[0] - 1]?.attributes} />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 py-10">
              <Chart
                attributes={data[values[0] - 1]?.attributes}
                label={data[values[0] - 1]?.title}
              />
            </div>
            <div className="w-5/6 md:w-1/2 mx-auto">
              <Range
                values={this.state.values}
                step={STEP}
                min={MIN}
                max={data.length || MAX}
                onChange={(values) => this.setState({ values })}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className="h-1 w-full self-center rounded-lg"
                  >
                    <div
                      ref={props.ref}
                      className="h-1 w-full rounded-lg self-center"
                      style={{
                        background: getTrackBackground({
                          values: values,
                          colors: ['#548BF4', '#ccc'],
                          min: MIN,
                          max: data.length || MAX,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    className="h-10 w-10 br-1 bg-gray-400 flex items-center justify-center box-shadow-md"
                  >
                    <div
                      className={`h-4 w-1 ${isDragged ? 'bg-[#548BF4]' : 'bg-white'}`}
                    />
                  </div>
                )}
              />
               <h1 className="sm:text-3xl text-2xl font-medium title-font py-4 text-gray-400">
                {values[0]}
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
