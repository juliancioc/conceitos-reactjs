import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import MaterialTable from 'material-table';

import './styles.css';
import * as Action from '../redux/actions';

function RepositoryList({ getAllRepositories, removeRepositories, addRepository, editRepositories }) {
    const repositories = useSelector(state => state.repositories);

    const [state, setState] = useState({
        columns: [
            { title: 'Title', field: 'title' },
            { title: 'Description', field: 'description' },
            {
                title: 'Url', field: 'url',
                render: rowData => <a className="url" href={rowData.url} target="_blank">{rowData.url}</a>,
            },
            { title: 'Likes', field: 'likes', editable: 'never' },
            {
                title: 'Techs', field: 'techs',
            }

        ]
    });

    useEffect(() => {
        async function getRepositories() {
            await getAllRepositories();
        }
        getRepositories();

    }, []);

    return (
        <div className="container"
            data-testid="repository-list">
            <MaterialTable
                className="table"
                isLoading={!repositories.data}
                title="Projects"
                columns={state.columns}
                data={repositories.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                addRepository(newData, repositories.data)
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                editRepositories(newData, oldData, repositories)
                            }, 600);
                        }),
                    onRowDelete: (newData, ) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                removeRepositories(newData.id, repositories)
                            }, 600);
                        }),
                }}
            />
        </div >
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllRepositories: Action.getAllRepositories,
        removeRepositories: Action.removeRepositories,
        addRepository: Action.addRepositories,
        editRepositories: Action.editRepositories,
    }, dispatch);
}

const mapStateToProps = state => {
    const { repositories } = state;
    return { repositories }
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
