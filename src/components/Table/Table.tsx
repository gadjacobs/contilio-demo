import * as React from 'react';
import { IAttributes } from '../../types/types';

export interface ITableProps {
  attributes: IAttributes[];
};

export default class Table extends React.Component<ITableProps> {
  render() {
    return (
      <table className="table-fixed w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
              Name
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.attributes?.map((attribute, index) => {
            return (
              <tr key={index}>
                <td className="px-4 py-3">{attribute.name}</td>
                <td className="px-4 py-3">
                  {attribute.value} {attribute.unit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
