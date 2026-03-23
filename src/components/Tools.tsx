import {memo} from 'react';
import {toolItems} from '@/components/data/tools';
import Icon from '@/icons/Icon';

const Tools = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
      <h3 className="text-2xl mb-8 text-center dark:text-white">Alati & Tehnologije</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {toolItems.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">
              <Icon
                name={tool.icon}
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Tools);
