function Table({ header, body, className }: {
  header: JSX.Element,
  body: JSX.Element[],
  className?: string,
}) {
  return (
    <div className="flex flex-col">
      <style>
        {`
        tr:nth-child(odd) {
          background-color: #ffffff;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        td,th {
          border: 1px solid #dddddd;
          box-sizing: border-box;
          padding-left: 4px;
          padding-right: 4px;
        }
        `}
      </style>
      <table className={"w-full " + className}>
        <thead>
          {header}
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    </div>

  )
}

export default Table;