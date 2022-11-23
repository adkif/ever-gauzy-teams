import { useOrganizationTeams } from "@app/hooks/useOrganizationTeams";
import { useTeamInvitations } from "@app/hooks/useTeamInvitations";
import { useTeamTasks } from "@app/hooks/useTeamTasks";
import { useEffect } from "react";
import TeamMemberSection from "../components/home/team-member";
import { TimerTasksSection } from "../components/home/timer-tasks";
import { AppLayout } from "../components/layout";

const Main = () => {
  const { loadTeamsData, firstLoadTeamsData } = useOrganizationTeams();
  const { firstLoadTasksData } = useTeamTasks();
  const { firstLoadTeamInvitationsData } = useTeamInvitations();

  useEffect(() => {
    //To be called once, at the top level component (e.g main.tsx);
    firstLoadTeamsData();
    firstLoadTasksData();
    firstLoadTeamInvitationsData();
    // --------------

    loadTeamsData();
  }, []);

  return (
    <div className="bg-[#F9FAFB] dark:bg-[#18181B]">
      <AppLayout>
        <div className="">
          <TimerTasksSection />
          <TeamMemberSection />
        </div>
      </AppLayout>
    </div>
  );
};
export default Main;
