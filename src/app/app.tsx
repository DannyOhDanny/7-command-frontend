import styles from './app.module.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as api from '../shared/utils/api';
import { Login } from '../pages/login/login';
import { EmployeeRatingPage } from '../pages/employee-rating/employee-rating';
import { MyPlan } from '../pages/my-plan/my-plan';
import { EmployeePlan } from '../pages/employee-plan/employee-plan';
import { MainPage } from '../pages/main-page/main-page';
import { ManagerIprDraft } from '../pages/manager-ipr-draft/manager-ipr-draft';
import { LeaderEmployeesList } from '../pages/leader-employees-list/leader-employees-list';
import users, { User } from '../shared/utils/users';
import { testData } from '../shared/utils/test-users';
import { IPREmployee } from '../pages/ipr-employee/ipr-employee';
import { roleUrl, accessUrl } from '../shared/utils/urls';
import { MyIpr } from '../pages/my-ipr/my-ipr';
import { MyIprRating } from '../pages/my-ipr-rating/my-ipr-rating';
import { useAppSelector } from '../shared/hooks/redux';

function App() {
	const ipr_id: number = 1; // сценарий руководителя с ИПР в работе
	const ipr_id2: number = 2; // сценарий руководителя с ИПР черновик
	const ipr_id3: number = 3; // сценарий сотрудника с ИПР

	const userData = useAppSelector((state) => state.user.user);
	console.log('userData в Апп: ', userData);
	const isEmployee = userData.positionId === 'EMPLOYEE';
	console.log('isEmployee: ', isEmployee);
	// const isExecutive = userData.positionId === 'MANAGER'

	return (
		<div className={styles.container__main}>
			<Routes>
				<Route path={accessUrl[2].url} element={<Login users={users} />} />
				<Route
					path="/main"
					element={<MainPage isExecutive={true} isEmployee={false}></MainPage>}
				/>
				<Route
					path={roleUrl[0].url}
					element={
						<LeaderEmployeesList
							isExecutive={true}
							data={testData}
							ipr_id={ipr_id}
							ipr_id2={ipr_id2}
						/>
					}
				/>
				{/* <Route
					path="/service-iprs/myteam"
					element={<LeaderEmployeesList data={testData} />}
				/> */}
				{/* <Route
					path="/service-iprs/my"
					element={<MyIpr statusText="Черновик" statusColor="purple"></MyIpr>}
				/> */}
				<Route
					path={roleUrl[1].url}
					element={<MyPlan isEmployee={true} ipr_id3={ipr_id3} />}
				/>

				<Route path="/service-iprs/mentor" element={<></>} />

				{/* Роуты сценариев */}
				<Route
					path="/service-iprs/ipr/1"
					element={
						<ManagerIprDraft
							ipr_id={1}
							isExecutive={true}
							statusColor="blue"
							statusText="в работе"
						/>
					}
				/>
				<Route
					path="/service-iprs/ipr/2"
					element={
						<ManagerIprDraft
							ipr_id={1}
							isExecutive={true}
							statusColor="purple"
							statusText="черновик"
						/>
					}
				/>
				<Route
					path="/service-iprs/ipr/:id"
					element={
						<ManagerIprDraft
							ipr_id={1}
							isExecutive={false}
							statusColor="blue"
							statusText="в работе"
						/>
					}
				/>
				{/* Футер - старые роуты */}

				<Route
					path={roleUrl[1].url}
					element={<MyPlan isEmployee={true} ipr_id3={ipr_id3} />}
				/>
				<Route
					path="/service-iprs/my-ipr-rating/:id"
					element={<MyIprRating />}
				/>
				<Route path="/service-iprs/my-ipr/:id" element={<MyIpr />} />
				<Route path="/service-iprs/ipr/:id" element={<IPREmployee />} />

				<Route path="/service-iprs/myteam/history" element={<EmployeePlan />} />
				<Route
					path="/iprs/rating"
					element={<EmployeeRatingPage isExecutive={true} />}
				/>
				<Route path="/*" element={<></>} />
			</Routes>
		</div>
	);
}

export default App;
