"use client"
import {useCallback, useEffect, useState} from "react";
import {Card} from "@/app/components/card";

export default function Home() {
    const [currentList, setCurrentList] = useState([])
    const [list, setList] = useState([])
    const [, updateState] = useState({});
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {
        fetch('/api/items').then((items) => items.json().then(data => setList(data)) )
    },[])

    const sortCreatedAt = () => {
        list.sort((a: any, b: any) => {
            if (a.createdAt < b.createdAt) {
                return -1
            }
            if (a.createdAt > b.createdAt) {
                return 1
            }
            return 0

        })
        setCurrentList(list)
    }

    const sortFileName = (reverse = false) => {
        list.sort((a: any, b: any) => {
            return a.fileName.localeCompare(b.fileName, undefined, { numeric: true, sensitivity: 'base'})
        })
        reverse ? setCurrentList(list.reverse()) : setCurrentList(list)
    }

    const sort = (e: any) => {
        setCurrentList([])
        const type = e.target.value
        switch (type) {
            case 'desc':
                sortFileName()
                break
            case 'asc':
                sortFileName(true)
                break
            case 'createdAt':
            default:
                sortCreatedAt()
                break
        }
        forceUpdate()
    }
    useEffect(() => {
        sortCreatedAt()
    },[list])

  return (
    <main>
        <select onChange={sort} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
            <option value="createdAt">Sort by Created At</option>
            <option value="desc">Sort by A-Z</option>
            <option value="asc">Sort by Z-A</option>
        </select>
        <ul role="list" className="divide-y divide-gray-100">
            {currentList.map((item, index) => {
               return <Card key={index} item={item} index={index} />
            })}
        </ul>
    </main>
  )
}
