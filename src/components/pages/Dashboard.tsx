import AnalysisTable from '../stock/AnalysisTable';
import Alert from '../general/Alert';
import { jarvisApi } from '../../features/apis/jarvisApi';

const Dashboard = () => {
  const { data, error } = jarvisApi.useJarvisV1ListPickedStocksQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      {error && (
        <div className="flex mt-1">
          <Alert show={true} onDismiss={() => {}}>
            <span className="font-semibold">Error:</span> {error}
          </Alert>
        </div>
      )}
      <div
        id="pills-on-gray-color-1"
        role="tabpanel"
        aria-labelledby="pills-on-gray-color-item-1"
      >
        <AnalysisTable data={data} />
      </div>
    </>
  );
};

export default Dashboard;
