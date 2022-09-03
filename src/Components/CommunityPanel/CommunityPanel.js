import React from 'react';
import './CommunityPanel.css';

function CommunityPanel() {
	const recentItems = (topic) => (
		<div className='Community_recentItem'>
			<a href='/#'>
				<span className='RecentItem_hashTag'>#</span>
				<span className='RecentItem_title'>{topic}</span>
			</a>
		</div>
	);
	return (
		<>
			<div className='CommunityPanel_itemsBlock'>
				<div className='CommunityPanel_header'>
					<h2>Recent</h2>
				</div>
				<div className='CommunityPanel_items'>
					{recentItems('web site development')}
					{recentItems('healthinsurance')}
					{recentItems('productivity')}
					{recentItems('mentalhealth')}
					{recentItems('personalfinancial')}
				</div>
			</div>
		</>
	);
}

export default CommunityPanel;
