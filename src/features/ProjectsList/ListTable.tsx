import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useProject } from 'contexts/ProjectProvider';
import { Project } from 'Model/Project';
import dayjs from 'dayjs';
import DATE_FORMAT from 'constants/dateFormat';
import { useNavigate } from 'react-router-dom';
import Button from 'component/ui/Button';
import Typography from 'component/ui/Typography';

const ListTable = () => {
  const { data } = useProject();
  const navigate = useNavigate();

  const columns: ColumnsType<Project> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (_, { startDate }) => (
        <Typography>{dayjs(startDate).format(DATE_FORMAT.primary)}</Typography>
      ),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (_, { endDate }) => (
        <Typography>{dayjs(endDate).format(DATE_FORMAT.primary)}</Typography>
      ),
    },
    {
      title: 'Project Manager',
      dataIndex: 'projectManager',
      key: 'projectManager',
    },
    {
      key: 'action',
      render: (_, { id }) => (
        <Button
          type='primary'
          onClick={() => {
            navigate(`/details/${id}`);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowKey='id'
      />
    </div>
  );
};

export default ListTable;
