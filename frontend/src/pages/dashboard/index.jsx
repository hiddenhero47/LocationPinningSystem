import React, {useState} from "react";
import { Container, TableWrapper } from "./elements/index.style";
import CustomTable from '../../components/table_components/basicTableOne';
import LocationHooks from "../../features/services/custom-hooks/location-hooks";

function Index() {
  const { data, isLoading } = LocationHooks.receive();

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  return (
    <Container>
      <p className="text-xl font-bold mb-4 p-4 mt-[20px]">Dashboard</p>

      <div className="w-full h-[auto] mb-4 p-4 mt-[20px]">
        <TableWrapper className="intro-y">
          <CustomTable
            fields={[
              {
                Header: () => {
                  return <span className="first">No</span>;
                },
                accessor: "ID",
                Cell: ({ nos, value, row }) => (
                  <span className="nowrap first">
                    {itemsPerPage * (page - 1) + nos || ""}
                  </span>
                ),
              },
              {
                Header: () => {
                  return "Name";
                },
                accessor: "name",
                Cell: ({ value }) => <span className="nowrap">{value}</span>,
              },
              {
                Header: () => {
                  return "Email";
                },
                accessor: "email",
                Cell: ({ value }) => <span className="nowrap">{value}</span>,
              },
              {
                Header: () => {
                  return "Country";
                },
                accessor: "country",
                Cell: ({ value }) => <span className="nowrap">{value}</span>,
              },
              {
                Header: () => {
                  return "State";
                },
                accessor: "state",
                Cell: ({ value }) => <span className="nowrap">{value}</span>,
              },
              {
                Header: () => {
                  return "City";
                },
                accessor: "city",
                Cell: ({ value }) => <span className="nowrap">{value}</span>,
              },
              {
                Header: () => {
                  return "Distance";
                },
                accessor: "positionInfo",
                Cell: ({ value }) => <span className="nowrap">{value?.distance}</span>,
              },
            ]}
            dataSource={data || []}
            isLoading={isLoading}
            emptyIcon={<i></i>}
            changePage={setPage}
            currentPage={page}
            totalPages={1}
          />
        </TableWrapper>
      </div>
    </Container>
  );
}

export default Index;
